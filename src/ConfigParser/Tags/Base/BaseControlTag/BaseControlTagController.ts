import { BaseTagController, BaseTagControllerAbstract, InternalTagType } from '../BaseTag/BaseTagController';

export class BaseControlTagController extends BaseTagController implements BaseTagControllerAbstract {
  static type: InternalTagType = 'base-visual';

  static allowedChildrenTypes: InternalTagType[] = [];

  static allowChildren = true;
}
